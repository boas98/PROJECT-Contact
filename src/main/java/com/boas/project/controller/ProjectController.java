/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boas.project.controller;

import com.boas.project.domain.Project;
import com.boas.project.service.ProjectDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author boas
 */
@RestController
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired
    private ProjectDao projectDao;
    
    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    public Project findProjectById(@PathVariable String id)
    {
        return projectDao.findOne(id);
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public void save(@RequestBody Project c)
    {
        projectDao.save(c);
    }
    
    @RequestMapping(method = RequestMethod.GET)
    public Page<Project> findAll(Pageable pageable)
    {
        return projectDao.findAll(pageable);
    }
    
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    public void delete(@PathVariable String id)
    {
        Project c = projectDao.findOne(id);
        if (c != null) {
            projectDao.delete(c);
        }
    }
    
    @RequestMapping(value = "/{id}",method = RequestMethod.PUT)
    public void edit(@PathVariable String id, @RequestBody Project c)
    {
        Project project = projectDao.findOne(id);
        if (project != null) {
            c.setId(id);
            projectDao.save(c);
        }
    }
}
