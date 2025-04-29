<?php

namespace App\Entity;

use App\Repository\UsuarioRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UsuarioRepository::class)]
class Usuario
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private string $nombre;

    #[ORM\Column(length: 100, unique: true)]
    private string $email;

    #[ORM\Column(length: 255)]
    private string $contrasena;

    #[ORM\Column(length: 15, nullable: true)]
    private ?string $telefono = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $direccion = null;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $fechaRegistro;

   public function getId(): ?int
{
    return $this->id;
}

public function getNombre(): string
{
    return $this->nombre;
}

public function setNombre(string $nombre): self
{
    $this->nombre = $nombre;
    return $this;
}

public function getEmail(): string
{
    return $this->email;
}

public function setEmail(string $email): self
{
    $this->email = $email;
    return $this;
}

public function getContrasena(): string
{
    return $this->contrasena;
}

public function setContrasena(string $contrasena): self
{
    $this->contrasena = $contrasena;
    return $this;
}

public function getTelefono(): ?string
{
    return $this->telefono;
}

public function setTelefono(?string $telefono): self
{
    $this->telefono = $telefono;
    return $this;
}

public function getDireccion(): ?string
{
    return $this->direccion;
}

public function setDireccion(?string $direccion): self
{
    $this->direccion = $direccion;
    return $this;
}

public function getFechaRegistro(): \DateTimeImmutable
{
    return $this->fechaRegistro;
}

public function setFechaRegistro(\DateTimeImmutable $fechaRegistro): self
{
    $this->fechaRegistro = $fechaRegistro;
    return $this;
}

}