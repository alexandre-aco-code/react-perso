import * as categoriesAPI from "./fakeCategoriesService";

const posts = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    titre: "Découverte Javascript",
    categorie: {
      _id: "5b21ca3eeb7f6fbccd471818",
      nom: "JS"
    }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    titre: "Spread operator",
    categorie: {
      _id: "5b21ca3eeb7f6fbccd471818",
      nom: "JS"
    }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    titre: "props vs state",
    categorie: {
      _id: "5b21ca3eeb7f6fbccd471820",
      nom: "React"
    }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    titre: "Installer des packages via NPM",
    categorie: {
      _id: "5b21ca3eeb7f6fbccd471814",
      nom: "NodeJS"
    }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    titre: "Utiliser MongoDB avec la librairie mongoose",
    categorie: {
      _id: "5b21ca3eeb7f6fbccd471814",
      nom: "NodeJS"
    }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    titre: "Présentation de la librairie express",
    categorie: {
      _id: "5b21ca3eeb7f6fbccd471814",
      nom: "NodeJS"
    }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    titre:
      "Mettre en place des route avec react-router-dom",
    categorie: {
      _id: "5b21ca3eeb7f6fbccd471820",
      nom: "React"
    }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    titre: "Structure d'un projet React",
    categorie: {
      _id: "5b21ca3eeb7f6fbccd471820",
      nom: "React"
    }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    titre: "les arrow functions : () => {}",
    categorie: {
      _id: "5b21ca3eeb7f6fbccd471818",
      nom: "JS"
    }
  }
];

export function getPosts() {
  return posts;
}

export function getPost(id) {
  return posts.find(m => m._id === id);
}

export function savePost(post) {
  let postInDb = posts.find(m => m._id === post._id) || {};
  postInDb.nom = post.nom;
  postInDb.categorie = categoriesAPI.categories.find(
    g => g._id === post.categorieId
  );

  if (!postInDb._id) {
    postInDb._id = Date.now();
    posts.push(postInDb);
  }
  return postInDb;
}

export function deletePost(id) {
  let postInDb = posts.find(m => m._id === id);
  posts.splice(posts.indexOf(postInDb), 1);
  return postInDb;
}
