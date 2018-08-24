-- 贷款表
create table if not exists `save_images`(
  id INT NOT NULL AUTO_INCREMENT,
  base longtext not null,  -- base64
  PRIMARY KEY(id)
);