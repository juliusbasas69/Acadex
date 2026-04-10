package com.acadex.userservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
public class UserController {

	@GetMapping("/test")
	public String showTest() {
		
		return "TEST PAGE";
	}
}
