#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import json
from DataModel import SaveTable


class RegisterHandler(webapp2.RequestHandler):
    USEREXISTED = "username existed"
    USERTOOSHORT = "username too short"
    PASSWORDTOOSHORT = "password too short"
    SUCCESS = "success"


    def get(self):
        self.error(405)

    def post(self):
        self.setCorsHeader()
        username = self.request.get('username')
        password = self.request.get('password')
        status = self.isParamaterLegal(username,password)
        if status == self.SUCCESS:
            self.response.set_status(200,'OK')
            table = SaveTable()
            table.Username = username
            table.Password = password
            table.put()
        else:
            self.response.set_status(403,'Forbidden')
        self.response.write(json.dumps({'result':status}))


    def options(self):
        self.setCorsHeader()

    def setCorsHeader(self):
        self.response.headers['Access-Control-Allow-Origin'] = '*'
        self.response.headers['Access-Control-Allow-Methods'] = 'POST,OPTIONS'

    def isUsernameExist(self, username):
        if SaveTable.query(SaveTable.Username == username).get():
            return True
        else:
            return False

    def isParamaterLegal(self, username, password):
        if len(username) < 4:
            reason = self.USERTOOSHORT
        elif self.isUsernameExist(username):
            reason = self.USEREXISTED
        elif len(password) < 4:
            reason = self.PASSWORDTOOSHORT
        else:
            reason = self.SUCCESS
        return reason



app = webapp2.WSGIApplication([
    ('/register', RegisterHandler)
], debug=True)
