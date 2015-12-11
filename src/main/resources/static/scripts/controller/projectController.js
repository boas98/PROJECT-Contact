/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('aplikasiProject')
        .controller('projectController',function ($scope,projectService){
            $scope.hallo = "Hello";
            $scope.nama = "Boas";
            $scope.model = {};
            $scope.isEdit = false;
            
            $scope.tampilkanData = function() {
                projectService.getListProject().success(function (data){
                    $scope.dataServer = data;
                });
            };
            
            $scope.data = [
                {"nama": "Boas","alamat": "Jakarta"},{"nama": "Christian","alamat": "Medan"}
            ];
            
            $scope.hapus = function (index){
                $scope.data.splice(index,1);
            };
            
            $scope.simpan = function(data){
                if ($scope.isEdit==true){
                    $scope.data[$scope.indexEdit] = data;
                }
                else{
                    $scope.data.push(data);
                }
                $scope.clear();
            }
            
            $scope.clear = function () {
                $scope.model = {};
                $scope.isEdit = false;
            }
            
            $scope.edit = function (data,index) {
                $scope.model.nama = data.nama;
                $scope.model.alamat = data.alamat;
                $scope.indexEdit = index;
                $scope.isEdit = true;
            }
            
            $scope.tampilkanData = function () {
                projectService.getProjectFromDb().success(function (data){
                   $scope.dataServer = data.content; 
                });
            };
            
            $scope.isDataEdit = false;
            $scope.currentProject = {};
            $scope.simpanData = function (data){
                if ($scope.isDataEdit==true){
                    projectService.update(data.id,data).success(function (data){
                       alert("data berhasil dirubah")
                       $scope.clearData();
                    }).error(function (){
                        alert("terjadi kesalahan dalam penyimpanan data")
                    })
                }
                else{
                    projectService.save(data).success(function (data){
                        alert("data berhasil disimpan")
                        $scope.clearData();
                    }).error(function (){
                        alert("Terjadi kesalahan dalam menyimpan data")
                    })
                }
            }
            
            $scope.hapusData = function(id) {
                projectService.delete(id).success(function (data){
                    alert("data berhasil dihapus");
                    $scope.clearData();
                }).error(function (){
                    alert("terjadi kesalahan dalam penghapusan data");
                })
            }
            
            $scope.editData = function (data){
                $scope.isDataEdit = true;
                $scope.currentProject = {};
                $scope.currentProject.nama = data.nama;
                $scope.currentProject.no_hp = data.no_hp;
                $scope.currentProject.id = data.id;
            };
            
            $scope.clearData = function (){
                $scope.isDataEdit = false;
                $scope.currentProject = {};
                $scope.reloadData();
            }
            
            $scope.reloadData = function (){
                projectService.getProjectFromDb().success(function (data){
                    $scope.dataServer = data.content;
                })
            }
});