# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
import unittest, time, re
import os

username = os.environ["SAUCE_USERNAME"]
access_key = os.environ["SAUCE_ACCESS_KEY"]
capabilities = {
        'tunnel-identifier': os.environ["TRAVIS_JOB_NUMBER"],
        'build': os.environ['TRAVIS_BUILD_NUMBER'],
        # 'tags': [os.environ['TRAVIS_PYTHON_VERSION'], 'CI']
        'tags': ['CI',]
        }
hub_url = "%s:%s@ondemand.saucelabs.com" % (username, access_key)  # The original settings from Travis CI doc do not apply here
base_url = "https://examplenode.herokuapp.com"

print('hub_url=' + hub_url);

class TC1(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Remote(
                desired_capabilities=capabilities,
                command_executor="http://%s/wd/hub" % hub_url
                )
        self.driver.implicitly_wait(30)  # add manually
        self.base_url = base_url  # change manually
        self.verificationErrors = []
        self.accept_next_alert = True
    
    def test_tc1(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element_by_name("first_name").clear()
        driver.find_element_by_name("first_name").send_keys("Goerge")
        driver.find_element_by_name("last_name").clear()
        driver.find_element_by_name("last_name").send_keys("Peng")
        driver.find_element_by_css_selector("input[type=\"submit\"]").click()
        element = WebDriverWait(driver, 10).until(
                expected_conditions.text_to_be_present_in_element_value((By.CSS_SELECTOR, 'body'), 'First name')
                )

    def test_tc2(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element_by_name("year").clear()
        driver.find_element_by_name("year").send_keys("2016")
        driver.find_element_by_name("month").clear()
        driver.find_element_by_name("month").send_keys("2")
        driver.find_element_by_name("day").clear()
        driver.find_element_by_name("day").send_keys("16")
    
    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e: return False
        return True
    
    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException as e: return False
        return True
    
    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True
    
    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

class TC2(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()
        self.driver.implicitly_wait(30)  # add manually
        self.base_url = base_url  # change manually
        self.verificationErrors = []
        self.accept_next_alert = True
    
    def test_tc1(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element_by_name("first_name").clear()
        driver.find_element_by_name("first_name").send_keys("Goerge")
        driver.find_element_by_name("last_name").clear()
        driver.find_element_by_name("last_name").send_keys("Peng")

    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e: return False
        return True
    
    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException as e: return False
        return True
    
    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True
    
    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()
