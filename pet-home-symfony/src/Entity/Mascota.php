<?php

namespace App\Entity;

use App\Repository\MascotaRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

#[ORM\Entity(repositoryClass: MascotaRepository::class)]
class Mascota
{



    public function __construct()
    {
        $this->imagenes = new ArrayCollection();
    }

    /** @return Collection<int, ImagenMascota> */
    public function getImagenes(): Collection
    {
        return $this->imagenes;
    }

   


    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['mascota'])]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Groups(['mascota'])]
    private string $nombre;

    #[ORM\Column(type: 'string', length: 20)]
    #[Groups(['mascota'])]
    private string $especie;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(['mascota'])]
    private ?string $raza = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['mascota'])]
    private ?int $edad = null;

    #[ORM\Column(type: 'string', length: 20)]
    #[Groups(['mascota'])]
    private ?string $tamanio = null;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['mascota'])]
    private \DateTimeImmutable $created_date;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['mascota'])]
    private ?string $descripcion = null;

    #[ORM\Column(type: 'string', length: 20)]
    #[Groups(['mascota'])]
    private string $estado = 'Disponible';

    #[ORM\Column(type: 'string', length: 20)]
    #[Groups(['mascota'])]
    private ?string $localidad = null;

    #[ORM\Column(type: 'string', length: 20)]
    #[Groups(['mascota'])]
    private ?string $salud = null;

    #[ORM\Column(type: 'string', length: 20)]
    #[Groups(['mascota'])]
    private ?string $genero = null;

    #[ORM\Column(type: 'string', length: 20)]
    #[Groups(['mascota'])]
    private ?string $caracteristicas = null;

    #[ORM\ManyToOne(targetEntity: Protectora::class, fetch: 'EAGER')]
    #[ORM\JoinColumn(onDelete: 'SET NULL')]
    #[Groups(['mascota', 'protectora'])]
    private ?Protectora $protectora = null;

    #[ORM\OneToMany(mappedBy: 'mascota', targetEntity: ImagenMascota::class, cascade: ['persist', 'remove'])]
    #[Groups(['mascota'])]
    private $imagenes;

    #[Groups(['mascota'])]
    public function getId(): ?int
    {
        return $this->id;
    }

    #[Groups(['mascota'])]
    public function getNombre(): string
    {
        return $this->nombre;
    }


    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;
        return $this;
    }

    #[Groups(['mascota'])]
    public function getEspecie(): string
    {
        return $this->especie;
    }

    public function setEspecie(string $especie): self
    {
        $this->especie = $especie;
        return $this;
    }

    #[Groups(['mascota'])]
    public function getRaza(): ?string
    {
        return $this->raza;
    }

    public function setRaza(?string $raza): self
    {
        $this->raza = $raza;
        return $this;
    }

    #[Groups(['mascota'])]
    public function getEdad(): ?int
    {
        return $this->edad;
    }

    public function setEdad(?int $edad): self
    {
        $this->edad = $edad;
        return $this;
    }

    #[Groups(['mascota'])]
    public function getTamanio(): ?string
    {
        return $this->tamanio;
    }

    public function setTamanio(?string $tamanio): self
    {
        $this->tamanio = $tamanio;
        return $this;
    }

    #[Groups(['mascota'])]
    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(?string $descripcion): self
    {
        $this->descripcion = $descripcion;
        return $this;
    }

    #[Groups(['mascota'])]
    public function getEstado(): string
    {
        return $this->estado;
    }

    public function setEstado(string $estado): self
    {
        $this->estado = $estado;
        return $this;
    }
    #[Groups(['mascota'])]
    public function getCreatedDate(): \DateTimeImmutable
    {
        return $this->created_date;
    }

    public function setCreatedDate(\DateTimeImmutable $created_date): self
    {
        $this->created_date = $created_date;
        return $this;
    }

    #[Groups(['mascota'])]
    public function getLocalidad(): ?string
    {
        return $this->localidad;
    }

    public function setLocalidad(?string $localidad): self
    {
        $this->localidad = $localidad;
        return $this;
    }

    #[Groups(['mascota'])]
    public function getSalud(): ?string
    {
        return $this->salud;
    }

    public function setSalud(?string $salud): self
    {
        $this->salud = $salud;
        return $this;
    }

    #[Groups(['mascota'])]
    public function getGenero(): ?string
    {
        return $this->genero;
    }

    public function setGenero(?string $genero): self
    {
        $this->genero = $genero;
        return $this;
    }

    #[Groups(['mascota'])]
    public function getCaracteristicas(): ?string
    {
        return $this->caracteristicas;
    }

    public function setCaracteristicas(?string $caracteristicas): self
    {
        $this->caracteristicas = $caracteristicas;
        return $this;
    }


    #[Groups(['mascota', 'protectora'])]
    public function getProtectora(): ?Protectora
    {
        return $this->protectora;
    }

    public function setProtectora(?Protectora $protectora): self
    {
        $this->protectora = $protectora;
        return $this;
    }

    // #[Groups(['mascota'])]
    // public function getImagenes(): iterable
    // {
    //     return $this->imagenes;
    // }

    public function addImagen(ImagenMascota $imagen): self
    {
        $this->imagenes[] = $imagen;
        return $this;
    }

    public function removeImagen(ImagenMascota $imagen): self
    {
        $this->imagenes->removeElement($imagen);
        return $this;
    }
}
