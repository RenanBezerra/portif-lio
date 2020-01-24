package br.com.gft.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomeController {
	
	@RequestMapping("/home")
		public String Home() {
		return"Home";
	}
	
	@RequestMapping("/p1")
	public String projeto1() {
	return"projeto1";
}

	@RequestMapping("/p2")
	public String projeto2() {
	return"projeto2";
}

	@RequestMapping("/p3")
	public String projeto3() {
	return"projeto3";
}

	@RequestMapping("/p4")
	public String projeto4() {
	return"projeto4";
}

	


	
	
}
