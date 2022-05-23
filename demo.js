const consumeApi = async url => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  } catch (e) {
    // error hendling code here
    console.log(e);
  }
};

//consumeApi(url('1'));

const mockApi = async isReject => {
  return new Promise((reslove, reject) => {
    return setTimeout(() => {
      if (isReject) {
        reject({ status: 500, message: 'There is an error' });
      } else {
        reslove({
          status: 200,
          data: {
            id: 1,
            title: 'fdfadfafaf',
          },
        });
      }
    }, 1000);
  });
};

const consumeApi2 = async () => {
  try {
    const resp = await mockApi(true);
    console.log(resp);
  } catch (e) {
    // error handling code here
    console.log('1');
    console.log(e);
  }
};

consumeApi2();
