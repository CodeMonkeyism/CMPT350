import webapp2
import json
from DataModel import SaveTable

class stateHandler(webapp2.RequestHandler):

    UNAUTHRIZED = "wrong username/password combination"
    SAVEDATANOTFOUND = "sava data not found"
    SUCCESS = "success"

    def get(self):
        self.setCorsHeader()
        username = self.request.get('username',"")
        password = self.request.get('password',"")
        user = self.getUser(username, password)
        if user:
            savedata = json.loads(user.GameData)
            self.response.set_status(200)
            status = self.SUCCESS
        else:
            savedata = None
            self.response.set_status(403)
            status = self.UNAUTHRIZED

        result = {'status':status,'data':savedata}
        self.response.write(json.dumps(result))

    def post(self):
        self.setCorsHeader()
        username = self.request.get('username',"")
        password = self.request.get('password',"")
        savedata = self.request.get('savedata',None)
        user = self.getUser(username,password)
        if user and savedata:
            user.GameData = savedata
            user.put()
            self.response.set_status(200)
            status = self.SUCCESS
        elif user :
            self.response.set_status(400)
            status = self.SAVEDATANOTFOUND
        else:
            self.response.set_status(403)
            status = self.UNAUTHRIZED

        self.response.write(json.dumps({'status':status}))


    def options(self):
        self.setCorsHeader()

    def setCorsHeader(self):
        self.response.headers['Access-Control-Allow-Origin'] = '*'
        self.response.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'

    def isUsernameExist(self, username):
        if SaveTable.query(SaveTable.Username == username).get():
            return True
        else:
            return False

    def getUser(self, username ,password):
        user = SaveTable.query(SaveTable.Username == username).get()
        if user:
            if user.Password == password:
                return user
        return None

app = webapp2.WSGIApplication([
    ('/sync', stateHandler),
], debug=True)