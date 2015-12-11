/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  boas
 * Created: Nov 28, 2015
 */
INSERT INTO project (id,nama,no_hp) VALUES
('1','Boas','081285180510'),
('2','Christian','9991698263');

INSERT INTO `c_security_role` (`id`,`nama`,`description`) VALUES
('admin','admin','Application Admin'),
('user','user','Application User');

INSERT INTO `c_security_permission` (`id`,`permission_label`,`permission_value`) VALUES
('project_update','Edit Project','ROLE_PROJECT_UPDATE'),
('project_view','View Project','ROLE_PROJECT_VIEW'),
('project_create','Create Project','ROLE_PROJECT_CREATE'),
('project_delete','Delete Project','ROLE_PROJECT_DELETE'),
('user_view','View User','ROLE_USER_VIEW');

INSERT INTO `c_security_role_permission` (`id_role`,`id_permission`) VALUES
('admin','project_update'),
('admin','project_view'),
('admin','project_create'),
('admin','project_delete'),
('user','project_view'),
('user','user_view'),
('admin','user_view');

INSERT INTO `c_security_user` (`id`,`username`,`password`,`active`,`id_role`) VALUES
('1','admin','admin',true,'admin'),
('2','user','user',true,'user');