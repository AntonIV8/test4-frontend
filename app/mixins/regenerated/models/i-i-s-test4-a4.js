import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('A4E', 'i-i-s-test4-a4', {
    
  });

  modelClass.defineProjection('A4L', 'i-i-s-test4-a4', {
    
  });
};
