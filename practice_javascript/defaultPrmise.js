function MyDefaultpromise(resolver) {
  let successList = [];
  let rejectList = [];

  let state = "pending";

  let data;

  function resolve(value) {
    if (state === "pending") {
      state = "fulfilled";
      data = value;
      successList.forEach((callback) => callback(value));
    }
  }

  function reject(reason) {
    if (state === "pending") {
      state = "rejected";
      data = reason;
      rejectList.forEach((callback) => callback(reason));
    }
  }

  setTimeout(() => {
    try {
      resolver(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }, 0);

  return {
    status: state,
    then: function (onSuccess, onFailure) {
      if (state === "pending") {
        successList.push(onSuccess);
        rejectList.push(onFailure);
      } else {
        if (state === "fulfilled") {
          onSuccess(data);
        } else {
          onFailure(data);
        }
      }
    },
  };
}

let promise = new MyDefaultpromise((resolve, reject) => {
  setTimeout(() => {
    reject("Hello World");
  }, 1000);
});

promise.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);


function promiseAll(PromiseArr){
    return new Promise((resolve, reject) => {
        const datArr = new Array(PromiseArr.length);
        let resolutionState = 'pending';

        for (const index in PromiseArr) {
            PromiseArr[index].then((data) => {
                datArr[index] = data;
                if(datArr.filter((value) => value !== undefined).length === PromiseArr.length){
                    resolutionState = 'fulfilled';
                    resolve(datArr);
                }
            }).catch((error) => {
                resolutionState = 'rejected';
                reject(error);
            })
        }
    })
}
