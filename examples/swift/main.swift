import Foundation

let url = URL(string: "https://hashable-api.herokuapp.com/api/hash?algorithm=sha256&str=HelloWorld&encoding=hex")!

let task = URLSession.shared.dataTask(with: url) {(data, response, error) in
    guard let data = data else { return }
    print(String(data: data, encoding: .utf8)!)
}

task.resume()