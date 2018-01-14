angular
  .module('root', [
    'common',
    'components',
    'templates'
  ])
  .config(function($locationProvider) {
    'ngInject';

    $locationProvider.hashPrefix('');
  });
