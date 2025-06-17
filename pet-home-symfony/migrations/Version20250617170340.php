<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250617170340 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', available_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', delivered_at DATETIME DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE mascota CHANGE created_date created_date DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', CHANGE localidad localidad VARCHAR(20) NOT NULL, CHANGE salud salud VARCHAR(20) NOT NULL, CHANGE genero genero VARCHAR(20) NOT NULL, CHANGE Caracteristicas caracteristicas VARCHAR(20) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE protectora ADD imagen VARCHAR(255) DEFAULT NULL
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            DROP TABLE messenger_messages
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE mascota CHANGE created_date created_date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, CHANGE localidad localidad VARCHAR(100) NOT NULL, CHANGE salud salud VARCHAR(100) NOT NULL, CHANGE genero genero VARCHAR(100) NOT NULL, CHANGE caracteristicas Caracteristicas VARCHAR(200) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE protectora DROP imagen
        SQL);
    }
}
