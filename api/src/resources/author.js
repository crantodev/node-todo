module.exports = function(resource) {
  return {
    id: resource.id,
    email: resource.email,
    first_name: resource.first_name,
    last_name: resource.last_name
  };
};
