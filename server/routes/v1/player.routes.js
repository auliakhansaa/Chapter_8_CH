const Pc = require("../../controllers/player.controller");
const pr = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

pr.get("/", Pc.getPlayers);
pr.post("/", Pc.createPlayer);
pr.put("/:id", Pc.updatePlayer);
pr.delete("/:id", Pc.deletePlayer);
pr.get("/:id", Pc.getPlayerById);
pr.post("/exp/:id", Pc.updateExperience);

module.exports = playerRouter;
