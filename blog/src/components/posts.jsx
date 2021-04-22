import React, { Component } from "react";
import { getPosts } from "../services/fakePostsService";

class Posts extends Component {
  state = {
    posts: getPosts()
  };

  handleDelete = post => {
    const posts = this.state.posts.filter(
      m => m._id !== post._id
    );
    this.setState({ posts: posts });
  };

  render() {
    const { length: count } = this.state.posts;

    if (count === 0)
      return <p>Aucun article dans la base de données</p>;

    return (
      <React.Fragment>
        <p>{count} Articles dans la base de données</p>
        <table className="table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Catégorie</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post._id}>
                <td>{post.titre}</td>
                <td>{post.categorie.nom}</td>

                <td>
                  <button
                    onClick={() => this.handleDelete(post)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Posts;
