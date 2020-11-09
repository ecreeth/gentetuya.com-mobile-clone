import React, {useState, useEffect, useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {dateToHumans} from '../utils';

const DOMAIN = 'https://www.gentetuya.com/wp-json/wp/v2';
const FIELDS =
  'id,date,modified,link,title,content.rendered,excerpt.rendered,jetpack_featured_media_url,featured_media,_links&_embed=author,wp:term';

const ListItem = React.memo(({item, index}) => {
  const isFirstItem = index === 0;
  return (
    <>
      {isFirstItem ? (
        <Image
          style={styles.featuredImage}
          source={{uri: item.jetpack_featured_media_url}}
        />
      ) : null}
      <View style={styles.list}>
        <View style={styles.listBody}>
          <Text
            style={[styles.listHeader, isFirstItem && styles.fontWeightBold]}>
            {item.title.rendered}
          </Text>
          <Text style={styles.listDate}>
            {dateToHumans(item.date)} por{' '}
            <Text style={styles.textBlack}>
              {item._embedded?.author[0].name || 'Anónimo'}
            </Text>
          </Text>
        </View>
        {!isFirstItem ? (
          <Image
            style={styles.image}
            source={{uri: item.jetpack_featured_media_url}}
          />
        ) : null}
      </View>
    </>
  );
});

function HomeScreen() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoadingPosts, setLoadingPosts] = useState(false);

  // Get the first 10 posts
  const getPosts = useCallback(() => {
    setLoadingPosts(true);
    fetch(`${DOMAIN}/posts?_fields=${FIELDS}&per_page=7&page=${page}`)
      .then((response) => response.json())
      .then((posts) => {
        setData((preData) => {
          return page === 1 ? posts : [...preData, ...posts];
        });
        setLoadingPosts(false);
      })
      .catch((e) => console.log(e));
  }, [page]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // Called once when the scrol
  // position gets  end reached list
  const onEndReached = () => {
    if (isLoadingPosts) {
      return;
    }
    setPage(page + 1);
  };

  // Called when the list starts refreshing.
  const onRefresh = () => {
    setPage(1); // The current page is now one
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={(props) => <ListItem {...props} />}
        ListFooterComponent={() =>
          isLoadingPosts ? (
            <ActivityIndicator style={styles.pb} color="#333" />
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  list: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  listHeader: {
    fontWeight: '500',
    paddingBottom: 5,
    fontSize: 16,
  },
  fontWeightBold: {
    fontWeight: '700',
  },
  listDate: {
    fontSize: 12,
    color: '#444',
  },
  listBody: {
    flex: 1,
    marginRight: 7,
    justifyContent: 'space-between',
  },
  image: {
    flex: 0.3,
    borderRadius: 7,
  },
  featuredImage: {
    width: '100%',
    height: 150,
    borderRadius: 7,
  },
  pb: {
    paddingBottom: 7,
  },
  textBlack: {
    color: '#000',
  },
});

export default HomeScreen;
