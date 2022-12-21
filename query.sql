SELECT user_id, username, equipment_id, equipment_name, device_id, board_id, board_name, uedbg.sensor_id, magnitud, sensor_name
FROM(
    SELECT user_id, username, equipment_id, equipment_name, uedb.device_id, board_id, board_name, sensor_id
    FROM (
        SELECT user_id, username, equipment_id, equipment_name, device_id, ued.board_id, board_name
        FROM (
            SELECT user_id, username, ue.equipment_id, equipment_name, device_id, board_id
            FROM (
                SELECT users.user_id, username, equipment_id, equipment_name 
                FROM (
                    SELECT id as user_id, username
                    FROM auth_user
                ) AS users
                INNER JOIN (
                    SELECT id AS equipment_id, name AS equipment_name, user_id
                    FROM api_equipment
                ) as equipment
                ON users.user_id=equipment.user_id
            ) as ue
            INNER JOIN (
                SELECT id AS device_id, board_id, equipment_id 
                FROM api_device
            ) AS device
            ON ue.equipment_id=device.equipment_iD
        ) AS ued
        INNER JOIN (
            SELECT id AS board_id, name AS board_name
            FROM api_board
        ) as board
        ON ued.board_id=board.board_id
    ) AS uedb
    INNER JOIN (
        SELECT id AS gauge_id, device_id, sensor_id 
        FROM api_gauge
    ) AS gauge
    ON uedb.device_id=gauge.device_id
) AS uedbg
INNER JOIN (
    SELECT id, magnitud, name AS sensor_name 
    FROM api_sensor
) AS sensor
ON uedbg.sensor_id=sensor.id
;


SELECT users.id as user_id, username, equipment.id as equipment_id, equipment.name AS equipment_name, device.id as device_id, board.id AS board_id, board.name, gauge.id AS gauge_id, sensor.id AS sensor_id, sensor.name
FROM auth_user as users
INNER JOIN api_equipment as equipment
ON users.id=equipment.user_id
INNER JOIN api_device AS device
ON equipment.id=device.equipment_id
INNER JOIN api_board as board
ON device.board_id=board.id
INNER JOIN api_gauge AS gauge
ON device.id=gauge.device_id
INNER JOIN api_sensor AS sensor
ON gauge.sensor_id=sensor.id
;


SELECT *
FROM api_equipment as e
INNER JOIN api_device as d
ON e.id=d.equipment_id
full JOIN api_gauge AS gauge
ON d.id=gauge.device_id

;