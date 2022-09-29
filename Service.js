import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Service = {

  obj: {ready:false},

  getItems: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('items');
      if(jsonValue != null){
        Service.obj = JSON.parse(jsonValue);
        Service.obj.ready = true;
      }
      return Service.obj;
    } catch(e) {}
  },

  addItem: async (key, value) => {
      let obj = Service.obj;
      obj[key] = value;
      let previousChildren = obj[value.parent].children;
      let children = null;
      if(!previousChildren){
        children = [key];
      } else if (!Array.isArray(previousChildren)){
        children = [previousChildren, key];
      } else if (previousChildren.indexOf(key) > -1){
        children = previousChildren;
      } else{
        children = [...previousChildren, key];
      }

      obj[value.parent].children = children;
      const jsonValue = JSON.stringify(obj)
        try {
            await AsyncStorage.setItem('items', jsonValue);
          } catch (e) {}
  }

};

export default Service;