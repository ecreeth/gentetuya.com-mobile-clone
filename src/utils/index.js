// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
function dateToHumans(date) {
  let seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return `hace ${Math.floor(interval)} ${
      Math.floor(interval) === 1 ? 'anho' : 'anhos'
    }`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return `hace ${Math.floor(interval)} ${
      Math.floor(interval) === 1 ? 'mes' : 'meses'
    }`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return `hace ${Math.floor(interval)} ${
      Math.floor(interval) === 1 ? 'dia' : 'dias'
    }`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return `hace ${Math.floor(interval)} ${
      Math.floor(interval) === 1 ? 'hora' : 'horas'
    }`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return `hace ${Math.floor(interval)} ${
      Math.floor(interval) === 1 ? 'minuto' : 'minutos'
    }`;
  }
  return `hace ${Math.floor(seconds)} ${
    Math.floor(seconds) === 1 ? 'segundo' : 'segundos'
  }`;
}

export {dateToHumans};
