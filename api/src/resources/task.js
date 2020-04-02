const Author = require("./author");

module.exports = function(resource) {
  return {
    id: resource.id,
    title: resource.title,
    description: resource.description,
    author: Author(resource.author)
  };
};
