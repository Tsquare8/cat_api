/**
 * Cat.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    breed: {
      type: "string",
      unique: true,
      required: true,
      uppercase: true
    },

    size: {
      type: "string"
    },

    life_span: {
      type: "string"
    },

    general_health: {
      type: "integer"
    },

    active: {
      type: "integer"
    },

    image: {
      type: "string",
      url: true
    }

  }
};
