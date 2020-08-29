"use strict";

var _require = require('express'),
    Router = _require.Router;

var axios = require('axios');

var Dev = require('./models/Dev');

var routes = Router();
routes.post('/devs', function _callee(req, res) {
  var _req$body, github_username, techs, response, _response$data, _response$data$name, name, avatar_url, bio, techsArray, dev;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, github_username = _req$body.github_username, techs = _req$body.techs;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get("https://api.github.com/users/".concat(github_username)));

        case 3:
          response = _context.sent;
          _response$data = response.data, _response$data$name = _response$data.name, name = _response$data$name === void 0 ? login : _response$data$name, avatar_url = _response$data.avatar_url, bio = _response$data.bio;
          techsArray = techs.split(',').map(function (tech) {
            return tech.trim();
          });
          _context.next = 8;
          return regeneratorRuntime.awrap(Dev.create({
            github_username: github_username,
            name: name,
            avatar_url: avatar_url,
            bio: bio,
            techs: techsArray
          }));

        case 8:
          dev = _context.sent;
          return _context.abrupt("return", res.json({
            menssage: "Cadastro realizado com sucesso",
            dev: dev
          }));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = routes;