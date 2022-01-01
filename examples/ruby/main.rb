require 'uri'
require 'net/http'

uri = URI('https://hashable-server.herokuapp.com/api/hash?algorithm=sha256&str=HelloWorld&encoding=hex')
res = Net::HTTP.get_response(uri)
puts res if res.is_a?(Net::HTTPSuccess)