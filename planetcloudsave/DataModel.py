'''Data Model'''
from google.appengine.ext import ndb

class SaveTable(ndb.Model):

    
    Username = ndb.StringProperty(required = True)
    Password = ndb.StringProperty(required = True)
    GameVersion = ndb.StringProperty(default = '1.0')
    GameData = ndb.StringProperty(indexed = False)