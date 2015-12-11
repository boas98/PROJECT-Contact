/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.boas.project.service;

import com.boas.project.domain.User;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author boas
 */
public interface UserDao extends PagingAndSortingRepository<User, String>{
    public User findByUsername(String username);
}
