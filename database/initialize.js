var db = require ('./connect.js');

var tableSql = [
`CREATE TABLE player (
    github_login varchar(39),
    github_id int UNIQUE,
    avatar_url varchar(100),
    github_url varchar(100),
    code_repo varchar(100) DEFAULT 'hero-starter',
    code_branch varchar(100),
    joined_at timestamp
)`,
`CREATE TABLE game (
    id bigserial,
    winning_team varchar(39),
    total_turns int,
    played_at timestamp,
    players varchar(39)[],
    heroes jsonb,
    initial_map jsonb
)`,
`CREATE TYPE actor_action AS ENUM ('North', 'East', 'South', 'West');
CREATE TABLE game_events (
    game_id bigint,
    turn int,
    actor smallint,
    action actor_action
)`,
`CREATE TABLE player_lifetime_stats (
    github_login varchar(39),
    kills bigint DEFAULT 0,
    deaths bigint DEFAULT 0,
    damage_given bigint DEFAULT 0,
    damage_taken bigint DEFAULT 0,
    mines_taken bigint DEFAULT 0,
    diamonds_earned bigint DEFAULT 0,
    health_given bigint DEFAULT 0,
    health_recovered bigint DEFAULT 0,
    graves_taken bigint DEFAULT 0,
    games_won bigint DEFAULT 0,
    games_lost bigint DEFAULT 0
)`
];

tableSql.forEach(function (sql) {
    db.execute(sql, function (err, result) {
        if (err) {
            throw err;
        }
    });
});