<?php

namespace App\Entity;

use App\Repository\ImagenMascotaRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ImagenMascotaRepository::class)]
class ImagenMascota
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Mascota::class, inversedBy: 'imagenes')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private Mascota $mascota;

    #[ORM\Column(length: 255)]
    private string $urlImagen;

    public function getId(): ?int
{
    return $this->id;
}

public function getMascota(): Mascota
{
    return $this->mascota;
}

public function setMascota(Mascota $mascota): self
{
    $this->mascota = $mascota;
    return $this;
}

public function getUrlImagen(): string
{
    return $this->urlImagen;
}

public function setUrlImagen(string $urlImagen): self
{
    $this->urlImagen = $urlImagen;
    return $this;
}

}