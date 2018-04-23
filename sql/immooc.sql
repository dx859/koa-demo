/*
Navicat MySQL Data Transfer

Source Server         : locahost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : immooc

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-04-23 16:57:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for todo_notes
-- ----------------------------
DROP TABLE IF EXISTS `todo_notes`;
CREATE TABLE `todo_notes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '便签内容',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `content` varchar(255) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of todo_notes
-- ----------------------------

-- ----------------------------
-- Table structure for todo_tags
-- ----------------------------
DROP TABLE IF EXISTS `todo_tags`;
CREATE TABLE `todo_tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tag` varchar(80) NOT NULL COMMENT 'tag名称',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tag_unique` (`tag`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of todo_tags
-- ----------------------------

-- ----------------------------
-- Table structure for todo_tasks
-- ----------------------------
DROP TABLE IF EXISTS `todo_tasks`;
CREATE TABLE `todo_tasks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `name` varchar(80) NOT NULL COMMENT '清单名称',
  `description` varchar(255) DEFAULT NULL COMMENT '清单描述',
  `is_complete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否归档，0未归档，1已归档',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of todo_tasks
-- ----------------------------

-- ----------------------------
-- Table structure for todo_todos
-- ----------------------------
DROP TABLE IF EXISTS `todo_todos`;
CREATE TABLE `todo_todos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL COMMENT '任务清单id',
  `title` varchar(255) NOT NULL COMMENT 'todo名称',
  `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT 'todo类型：1，2，3，4分别代表 很重要-很紧急，重要-不紧急，不重要-紧急，不重要-不紧急',
  `is_completed` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否完成：0 未完成，1 已完成',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `complete_at` timestamp NULL DEFAULT NULL COMMENT '完成时间',
  `plan_complete_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '计划完成时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of todo_todos
-- ----------------------------
INSERT INTO `todo_todos` VALUES ('1', '1', '1', '第一个计划', '1', '0', '2018-04-23 15:33:14', null, '2018-04-23 15:33:14');
INSERT INTO `todo_todos` VALUES ('2', '2', '2', '第二个计划', '1', '0', '2018-04-23 15:50:55', '2018-04-23 15:53:11', '2018-05-11 12:12:12');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL COMMENT '用户名',
  `password` char(32) NOT NULL COMMENT '密码',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
