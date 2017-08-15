(function(angular) {
	angular.module('serachWidget')
		.service('empMasterData', function($filter) {
		  this.allData = [
              {"Name":"Harjot","contactNo":"+91-9999566010","emailId": "harjot@gracias.com","policyDetails": "123456|654321"},{"Name":"Sahil","contactNo":"+91-7865735465","emailId": "sahil@gracias.com","policyDetails": "237852|982354"},{"Name":"Rajat","contactNo":"+91-8647353625","emailId": "rajat@gracias.com","policyDetails": "826472|543735"},{"Name":"Dhiraj","contactNo":"+91-9823587354","emailId": "dhiraj@gracias.com","policyDetails": "973919|876537"},{"Name":"Manjeet","contactNo":"+91-9263547284","emailId": "manjeet@gracias.com","policyDetails": "874562|984536"},{"Name":"Pawan","contactNo":"+91-9758354673","emailId": "pawan@gracias.com","policyDetails": "948567|647253"},{"Name":"Manpreet","contactNo":"+91-9654092549","emailId": "manpreet@gracias.com","policyDetails": "984516|637254"},{"Name":"Praneet","contactNo":"+91-8800760425","emailId": "praneet@gracias.com","policyDetails": "743928|435001"},{"Name":"Simarn","contactNo":"+91-8800885441","emailId": "simran@gracias.com","policyDetails": "236475|983464"},{"Name":"Prabhjot","contactNo":"+91-9953767288","emailId": "prabhjot@gracias.com","policyDetails": "734822|093728"}
              ];
			    
    			this.getData = function(searchKey) {
    			  var dataSet = [];
    			  if(searchKey && searchKey.length > 0)
    			    dataSet = $filter('filter')(this.allData, searchKey)
    			  
    			  return {dataSet};
    			};
		})
})(angular);