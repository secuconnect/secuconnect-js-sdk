import SDKCache from "./SDKCache";
import * as fs from 'fs';


export default class FileCache extends SDKCache {
  constructor() {
    super();

    this.dirName = 'tmp/';
  }

  exists(key) {
    return new Promise((resolve) => {
      let path = this.dirName + key;

      fs.exists(path, (exists) => {
        if (exists) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  isExpired(item) {
      let now = new Date();
      now = Math.round(now.getTime() / 1000);

      let createdAt = new Date(item.createdAt);
      createdAt = Math.round(createdAt.getTime() / 1000);

      let difference = now - createdAt;

      if (item.expires_in-30 > difference) {
          return false;
      } else {
          return true;
      }
  }

  setItem(key, value) {
    let item = value;
    Object.assign(item, { createdAt: new Date() });
    this.saveToFile(key, item);
  }

  getItem(key) {
    return this.readFromFile(key)
      .then((item) => {
        return item;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  saveToFile(fileName, content) {
    fs.exists(this.dirName, (exists) => {
      if (!exists) {
        fs.mkdir(this.dirName, (err) => {
          if (err) console.log(err);
        });
      }

      let path = this.dirName + fileName;

      fs.writeFile(path, JSON.stringify(content), (err) => {
        if (err) console.log(err);
      });
    });
  }

  readFromFile(fileName) {
    return new Promise((resolve, reject) => {
      let path = this.dirName + fileName;

      fs.exists(path, (exists) => {
        if (!exists) reject(new Error('File from ' + path + " doesn't exist!"));

        fs.readFile(path, (err, item) => {
          if (err) reject(new Error('Problem with reading file!'));

          item = JSON.parse(item);
          resolve(item);
        });
      });
    });
  }
}
