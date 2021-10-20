angular
  .module("homeModule")
  .config("getProductListServiceProvider", (getProductListServiceProvider) => {
    getProductListServiceProvider.config("http://localhost:8000/");
  });
