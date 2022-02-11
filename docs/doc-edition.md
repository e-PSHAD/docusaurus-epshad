---
sidebar_position: 100
---
# Edition de la documentation

Si vous avez les droits d'écriture sur le [dépôt des sources sur GitHub](https://github.com/e-PSHAD/pad-doc), vous pouvez éditer une page rapidement en cliquant sur le bouton **"Edit this page"** en bas de chaque page.

- La section [Edition depuis GitHub](#edition-depuis-github) détaille ce mode direct.
- Sinon il est possible de cloner le dépôt pour faire des [modifications en local](#edition-depuis-un-dépôt-local) avant de partager (recommandé pour les modifications conséquentes).

:::info INFO
Quelque soit la méthode d'édition choisie, il faut attendre quelques minutes pour que le [site de documentation](https://e-pshad.github.io/pad-doc/) soit mis à jour après sauvegarde.
:::

## Edition depuis GitHub

Chaque page de la documentation correspond à un **fichier au format Markdown (extension `.md`)** dans le **[dossier docs](https://github.com/e-PSHAD/pad-doc/tree/main/docs)** du dépôt GitHub.

### Comment modifier une page existante ?

1. **Trouvez le fichier source Markdown** correspondant dans [l'arborescence des catégories](https://github.com/e-PSHAD/pad-doc/tree/main/docs).
2. Cliquez sur le **bouton d'édition en ligne** du fichier.

![Edition page sous GitHub](/img/tutorial-how-to-collaborate/github-edit-button.png)

3. Modifiez le contenu en utilisant le format **[Markdown](https://docusaurus.io/docs/next/markdown-features)**.
6. En bas de l'écran, **donnez un titre/description à la modification** et cliquez sur le bouton `Commit changes`.
7. Le dépôt est mis à jour. Le [site](https://e-pshad.github.io/pad-doc/) sera prêt d'ici quelques minutes !

### Comment créer une nouvelle page ?

1. Placez-vous dans la catégorie dans laquelle vous souhaitez créer le contenu. Par exemple, `pad-doc/docs/new-folder/`.
2. Cliquez sur `Add a file`et selectionnez `Create a new file`.
3. **Ajoutez un nom** avec la termination `.md`.

![docs](/img/tutorial-how-to-collaborate/intro-md.png)

4. Ajoutez le contenu suivant en haut du document **et spécifiez sa position**.
```
---
sidebar_position: 2
---
```
5. **Ajoutez du contenu** en utilisant le format **[Markdown](https://docusaurus.io/docs/next/markdown-features)**.

![docs](/img/tutorial-how-to-collaborate/create-content.png)


6. En bas de l'écran, **donnez un titre/description à la modification** et cliquez sur le bouton `Commit new file`.
7. Le dépôt est mis à jour. Le [site](https://e-pshad.github.io/pad-doc/) sera prêt d'ici quelques minutes !


### Comment créer une nouvelle catégorie ?

Les catégories de la documentation correspondent à des dossiers pour les fichiers sources.

1. Accédez **au dépôt [GitHub](https://github.com/e-PSHAD/pad-doc)**.
2. Cliquez sur le dossier `Docs`.
3. Cliquez sur `Add a file` et sélectionnez `Create a new file`.
4. **Donnez un nom de dossier** pour la catégorie avec `/` à la fin. Cela créera automatiquement le dossier.

![docs](/img/tutorial-how-to-collaborate/automatique-creation.png)

:::caution ATTENTION
Respectez la nomenclature suivante `my-new-category`.
:::
5. Ajoutez `_category_.json` dans la zone de texte.

![docs](/img/tutorial-how-to-collaborate/category-json.png)

6. **Copiez et collez le bloc suivant** en indiquant **le nom et la position** que la catégorie prendra dans la barre latérale.
```
{
  "label": "Your new folder",
  "position": 2
}
```

:::caution ATTENTION
Ne donnez pas un numéro qui a déjà été attribué.
:::

7. En bas de l'écran, **donnez un titre/description à la modification** et cliquez sur le bouton `Commit new file`.
8. **La catégorie est prête !** Elle apparaîtra dans la barre latérale une fois que vous aurez ajouté une page dans cette catégorie.


## Edition depuis un dépôt local

:::info INFO
Avant de commencer, suivez les instructions dans le [README](https://github.com/e-PSHAD/pad-doc). Si vous le souhaitez, vous pouvez ainsi obtenir une **prévisualisation locale** du site avec vos modifications.
:::

### Comment modifier une page existante ?

1. **Trouvez le fichier source** correspondant (extension `.md`) dans [l'arborescence des catégories](https://github.com/e-PSHAD/pad-doc/tree/main/docs).
2. Modifiez le contenu en utilisant le format **[Markdown](https://docusaurus.io/docs/next/markdown-features)**.


### Comment créer une nouvelle page ?

1. **Créez un nouveau fichier `md`** dans la catégorie en question `/docs/introduction/votre-nouveau-fichier.md`.
2. **Ajoutez le contenu** suivant en haut du document et spécifiez sa position.
```
---
sidebar_position: 2
---
```
3. Vous pouvez maintenant compléter la page en utilisant le format **[Markdown](https://docusaurus.io/docs/next/markdown-features)**.

### Comment créer une nouvelle catégorie ?

1. Créez un nouveau dossier dans `/docs/` pour cette catégorie.
2. Copiez le document `/docs/introduction/_category_.json`.
3. Collez-le dans `/docs/<your-new-folder>/`.
4. Nommez la catégorie et indiquez la position à laquelle elle apparaîtra dans la barre latérale.
```
{
  "label": "Your new folder",
  "position": 2
}
```

:::caution ATTENTION
Ne donnez pas un numéro qui a déjà été attribué.
:::

5. **La catégorie est prête !** Elle apparaîtra dans la barre latérale une fois que vous aurez ajouté une page dans cette catégorie.

### Mise à jour du site
C'est le même process que pour la mise à jour de tout dépôt Git.

1. Ajoutez les fichiers à commiter avec `git add .`
2. Créez un commit avec `git commit` avec un message expliquant vos modifications
3. Poussez vos modifications avec `git push`
4. Eventuellement créez une [pull request](https://github.com/e-PSHAD/pad-doc/pulls) si vous voulez une revue de vos modifications

:::info
Les modifications poussées sur la branche `main` sont automatiquement déployées sur le site de documentation.
:::
