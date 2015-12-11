/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('aplikasiProject')
        .factory('projectService',function ($http) {
            return {
                getProject: function() {
                    return $http.get("/project");
                },
                getListProject: function() {
                    return $http.get("/listProject");
                },
                save: function (data) {
                    return $http.post("/api/project",data);
                },
                getProjectFromDb: function () {
                    return $http.get("/api/project");
                },
                delete: function(id) {
                    return $http.delete("/api/project/"+id);
                },
                update: function(id,data) {
                    return $http.put("/api/project/"+id,data);
                }
            };
});