# -*- coding: utf-8 -*-
from selenium import selenium
import unittest, time, re

class tc1_rc(unittest.TestCase):
    def setUp(self):
        self.verificationErrors = []
        self.selenium = selenium("localhost", 4444, "*chrome", "http://127.0.0.1:1337/")
        self.selenium.start()
    
    def test_tc1_rc(self):
        sel = self.selenium
        sel.open("/")
        sel.type("name=first_name", "Goerge")
        sel.type("name=last_name", "Peng")
        sel.click("css=input[type=\"submit\"]")
        sel.wait_for_page_to_load("30000")
    
    def tearDown(self):
        self.selenium.stop()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()
