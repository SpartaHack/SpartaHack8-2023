import unittest
import requests

# LINK = "https://us-central1-spartahack8.cloudfunctions.net/registeUser"
LINK = "http://127.0.0.1:8080/spartahack8/us-central1/registeUser"
def call_api(url,data):
    x = requests.post(url, json = data)
    return x.status_code, x.json()

class TestStringMethods(unittest.TestCase):

    def test_standard(self):
        payload = {
            "email":"test3@msu.edu",
            "first_name":"Leonardo",
            "last_name":"Specht",
            "school":"Michigan State",
            "country_of_origin": "Brazil",
            "graduation_date":"12/15/2022",
            "major":"Computer Science",
            "hackatons_attended":1,
            "linkedin":"leo_specht",
            "race":"White",
            "gender":"M",
            "phone":"9087747852",
            "education_level":"Sophomore",
            "resume":"my_link",
            "date_of_birth":"01/01/2002"}
        expected_status = 200
        expected_response = {
            "email":"test3@msu.edu",
            "first_name":"Leonardo",
            "last_name":"Specht",
            "school":"Michigan State",
            "country_of_origin": "Brazil",
            "graduation_date":"2022-12-15T00:00:00.000Z",
            "major":"Computer Science",
            "hackatons_attended":1,
            "linkedin":"leo_specht",
            "race":"White",
            "gender":"M",
            "phone":"9087747852",
            "education_level":"Sophomore",
            "resume":"my_link",
            "date_of_birth":'2002-01-01T00:00:00.000Z',
            "accepted_policy": True,
            "approved": False,
            "minor": False,
            "msu_student": True,
            "net_id": "test3"}
        response = call_api(LINK,payload)

        self.assertEqual((response[0],response[1]["data"]), (expected_status,expected_response))

    def test_msu_student(self):
        payload = {
            "email":"natarenm@msu.edu",
            "first_name":"Leonardo",
            "last_name":"Specht",
            "school":"Michigan State",
            "country_of_origin": "Brazil",
            "graduation_date":"12/15/2022",
            "major":"Computer Science",
            "hackatons_attended":1,
            "linkedin":"leo_specht",
            "race":"White",
            "gender":"M",
            "phone":"9087747852",
            "education_level":"Sophomore",
            "resume":"my_link",
            "date_of_birth":"01/01/2002"}
        expected_status = 200
        expected_response = {
            "email":"natarenm@msu.edu",
            "first_name":"Leonardo",
            "last_name":"Specht",
            "school":"Michigan State",
            "country_of_origin": "Brazil",
            "graduation_date":"2022-12-15T00:00:00.000Z",
            "major":"Computer Science",
            "hackatons_attended":1,
            "linkedin":"leo_specht",
            "race":"White",
            "gender":"M",
            "phone":"9087747852",
            "education_level":"Sophomore",
            "resume":"my_link",
            "date_of_birth":'2002-01-01T00:00:00.000Z',
            "accepted_policy": True,
            "approved": False,
            "minor": False,
            "msu_student": True,
            "net_id": "natarenm"}
        response = call_api(LINK,payload)

        self.assertEqual((response[0],response[1]["data"]), (expected_status,expected_response))

    def test_minor(self):
        payload = {
            "email":"leo.s.specht@gmail.com",
            "first_name":"Leonardo",
            "last_name":"Specht",
            "school":"Michigan State",
            "country_of_origin": "Brazil",
            "graduation_date":"12/15/2022",
            "major":"Computer Science",
            "hackatons_attended":1,
            "linkedin":"leo_specht",
            "race":"White",
            "gender":"M",
            "phone":"9087747852",
            "education_level":"Sophomore",
            "resume":"my_link",
            "content_form":"my_link2",
            "date_of_birth":"01/01/2006"}
        expected_status = 200
        expected_response = {
            "email":"leo.s.specht@gmail.com",
            "first_name":"Leonardo",
            "last_name":"Specht",
            "school":"Michigan State",
            "country_of_origin": "Brazil",
            "graduation_date":"2022-12-15T00:00:00.000Z",
            "major":"Computer Science",
            "hackatons_attended":1,
            "linkedin":"leo_specht",
            "race":"White",
            "gender":"M",
            "phone":"9087747852",
            "education_level":"Sophomore",
            "resume":"my_link",
            "content_form":"my_link2",
            "date_of_birth":'2006-01-01T00:00:00.000Z',
            "accepted_policy": True,
            "approved": False,
            "minor": True,
            "msu_student": False,
            "net_id": None}
        response = call_api(LINK,payload)


        self.assertEqual((response[0],response[1]["data"]), (expected_status,expected_response))

    def test_missing_email(self):
        payload = {
            "first_name":"Leonardo",
            "last_name":"Specht",
            "school":"Michigan State",
            "country_of_origin": "Brazil",
            "graduation_date":"12/15/2022",
            "major":"Computer Science",
            "hackatons_attended":1,
            "linkedin":"leo_specht",
            "race":"White",
            "gender":"M",
            "phone":"9087747852",
            "education_level":"Sophomore",
            "resume":"my_link",
            "content_form":"my_link2",
            "date_of_birth":"01/01/2006"}
        expected_status = 500
        expected_response = 'Missing email parameter'
        response = call_api(LINK,payload)
        self.assertEqual((response[0],response[1]["message"]), (expected_status,expected_response))

if __name__ == '__main__':
    unittest.main()