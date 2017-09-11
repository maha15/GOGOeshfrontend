app1.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
        // Set up the URL routing in the application
        $urlRouterProvider.otherwise("dashboardPlaceOrder");

        // Set up the routes
        $stateProvider
         .state('dashboardPlaceOrder', {
          name:'dashboardPlaceOrder',
          url:'/dashboardPlaceOrder',
          templateUrl: 'partials/dashboardPlaceOrder.html',
          controller: 'ordercontroller'
        })  
        .state('order', {
          name:'order',
          url:'/order',
          templateUrl: 'partials/order.html',
          controller: 'confirmordercontroller'
        })
        .state('register', {
          name: 'register',
          url: '/register',
          templateUrl: 'partials/register.html',
          controller: 'authCtrl',
         })
        .state('register.login', {
          name: 'register.login',
          url: '/login',
          templateUrl: 'partials/login.html',
          controller: 'authCtrl',
         })
         .state('register.signup', {
            name:'register.signup',
            url:'/signup',
            title: 'Signup',
            templateUrl: 'partials/signup.html',
            controller: 'authCtrl'
        })
         .state('logout', {
          name:'logout',
          url: '/logout',
          templateUrl: 'partials/login.html',
          controller: 'logoutCtrl',
         })
        
        .state('dashboard', {
          name:'dashboard',
          url:'/dashboard',
            title: 'Dashboard',
            templateUrl: 'partials/dashboard.html',
            controller: 'authCtrl'
        });


/*
        when('/login', {
            title: 'Login',
            templateUrl: 'partials/login.html',
            controller: 'authCtrl'
        })
        .when('/logout', {
            title: 'Logout',
            templateUrl: 'partials/login.html',
            controller: 'logoutCtrl'
        })
        .when('/signup', {
            title: 'Signup',
            templateUrl: 'partials/signup.html',
            controller: 'authCtrl'
        })
        .when('/dashboard', {
            title: 'Dashboard',
            templateUrl: 'partials/dashboard.html',
            controller: 'authCtrl'
        })     
        .when('/order', {
          templateUrl: 'partials/order.html',
          controller: 'confirmordercontroller'
        })
        .when('/dashboardPlaceOrder', {
          templateUrl: 'partials/dashboardPlaceOrder.html',
          controller: 'ordercontroller'
        })
        .otherwise({
          redirectTo: '/dashboardPlaceOrder',
          
        });*/

  }]);