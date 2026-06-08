import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

// Composant Card de Horizon UI
import Card from "components/card/Card";

export default function ProductForm() {
  // On prépare les données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    style: "",
    price: "",
    stock: "",
    description: "",
  });

  const toast = useToast();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Cette fonction met à jour les champs quand on écrit dedans
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
  // On récupère le premier fichier sélectionné
  const file = event.target.files[0];

  // Si aucun fichier n'est choisi, on arrête la fonction
  if (!file) return;

  // On garde l'image dans le state
  setImage(file);

  // On crée une prévisualisation temporaire de l'image
  setPreview(URL.createObjectURL(file));
};

  // Cette fonction se lance quand on clique sur le bouton Ajouter
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Produit à ajouter :", formData);

    toast({
      title: "Produit ajouté",
      description: "Le produit a bien été préparé.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // On vide le formulaire après l'envoi
    setFormData({
      name: "",
      category: "",
      style: "",
      price: "",
      stock: "",
      description: "",
    });
  };

  return (
    <Card p="30px">
      <Text color="white" fontSize="2xl" fontWeight="700" mb="25px">
        Ajouter un produit
      </Text>

      <Box as="form" onSubmit={handleSubmit}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px">
          <FormControl>
            <FormLabel color="gray.300">Nom du produit</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex : Nom du produit"
              bg="navy.800"
              color="white"
              borderColor="whiteAlpha.300"
              _placeholder={{ color: "gray.400" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel color="gray.300">Catégorie</FormLabel>
            <Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Choisir une catégorie"
              bg="navy.800"
              color="white"
              borderColor="whiteAlpha.300"
            >
              <option value="round">Round</option>
              <option value="almond">Almound</option>
              <option value="stiletto">Stiletto</option>
              <option value="square">Square</option>
              <option value="coffin">Coffin</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel color="gray.300">Style</FormLabel>
            <Select
              name="style"
              value={formData.style}
              onChange={handleChange}
              placeholder="Choisir un style"
              bg="navy.800"
              color="white"
              borderColor="whiteAlpha.300"
            >
              <option value="simple">Simple</option>
              <option value="cute">Cute</option>
              <option value="dark">Dark</option>
              <option value="goth">Goth</option>
              <option value="y2k">Y2K</option>
              <option value="harajukus">Harajukus</option>
            </Select>
          </FormControl>
          

          <FormControl>
            <FormLabel color="gray.300">Prix</FormLabel>
            <Input
              name="price"
              value={formData.price}
              onChange={handleChange}
              type="number"
              placeholder="Ex : 19.90"
              bg="navy.800"
              color="white"
              borderColor="whiteAlpha.300"
              _placeholder={{ color: "gray.400" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel color="gray.300">Stock</FormLabel>
            <Input
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              type="number"
              placeholder="Ex : 25"
              bg="navy.800"
              color="white"
              borderColor="whiteAlpha.300"
              _placeholder={{ color: "gray.400" }}
            />
          </FormControl>
        </SimpleGrid>

        <FormControl mt="20px">
          <FormLabel color="gray.300">Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Décrire le produit..."
            bg="navy.800"
            color="white"
            borderColor="whiteAlpha.300"
            _placeholder={{ color: "gray.400" }}
          />
        </FormControl>

        <FormControl mt="20px">
        <FormLabel color="gray.300">Image du produit</FormLabel>

        <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            bg="navy.800"
            color="white"
            borderColor="whiteAlpha.300"
            p="10px"
            height="auto"
        />

        {preview && (
            <Box mt="15px">
            <Text color="gray.300" mb="10px">
                Aperçu de l’image :
            </Text>

            <Image
                src={preview}
                alt="Aperçu du produit"
                maxW="220px"
                borderRadius="15px"
                objectFit="cover"
            />
            </Box>
        )}
        </FormControl>

        <Button
          type="submit"
          mt="25px"
          bg="purple.500"
          color="white"
          _hover={{ bg: "purple.600" }}
        >
          Ajouter le produit
        </Button>
      </Box>
    </Card>
  );
}