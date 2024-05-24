app.service('myserv', function() {
          this.getServiceList = function () {
    return [{"serviceName":"jc.flow:ping","description":"This is a demo service","serviceinputs":[],"serviceoutputs":[]}];
}
this.getISEndpoint = function() { 
 return 'http://192.168.1.105:5555/';
}
this.getAPIList = function() { 
 return [];
}
this.getCreatedTime = function() { 
 return "15-05-2024 10:02:49 CEST";
}
this.getPackageInfo = function(){
 return{"packageName":"JcSimpleFlowService","displayName":"My Great DEmo","status":"Development","tags":["demo","jc"],"createdDate":"07-02-2024 16:25:42 IST","version":"1.0","buildNumber":"","description":"test"};
}
});
