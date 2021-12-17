---
sidebar_position: 1
slug: /
---
# Comment collaborer ?

## Depuis la terminal WSL

:::info INFO
Avant de commencer, n'oubliez pas de suivre les instructions d'installation **[README.md](https://github.com/e-PSHAD/pad-doc)**.
:::

### Comment créer une nouvelle catégorie ?

1. Créez un nouveau dossier dans `/docs/` avec le nom du groupe.
2. Copiez le document `/docs/introduction/_category_.json`.
3. Collez-le dans `/docs/<your-new-folder>/`.
4. Nommez le groupe et indiquez la position dans laquelle il apparaîtra dans la barre latérale.
```
{
  "label": "Your new folder",
  "position": 2
}
```

:::caution ATTENTION
Ne donnez pas un numéro qui a déjà été attribué.
:::

5. **La catégorie est prête !** Il apparaîtra dans la barre latérale une fois que vous aurez ajouté un onglet.

### Comment créer un nouvel onglet ?

1. **Créez un nouveau fichier `md`** dans le groupe en question `/docs/introduction/votre-nouveau-fichier.md`.
2. **Ajoutez le contenu** suivant en haut du document et spécifiez sa position.
```
---
sidebar_position: 2
---
```
3. Vous pouvez maintenant compléter le nouvel onglet en utilisant **[Markdown Features](https://docusaurus.io/docs/next/markdown-features)**.

## Depuis GitHub

### Comment créer une nouvelle catégorie ?

1. Accédez **au dépôt [GitHub](https://github.com/e-PSHAD/pad-doc)**.
2. Cliquez sur le dossier `Docs`.
3. Cliquez sur `Add a file` et selectionnez `Create a new file`.
4. **Ajoutez un nom à votre groupe** avec `/` à la fin. Cela créera automatiquement le dossier.

![docs](/img/tutorial-how-to-collaborate/automatique-creation.png)

:::caution ATTENTION
Respectez la nomenclature suivante `my-new-category`.
:::
5. Ajoutez `_category_.json` dans la zone de texte.

![docs](/img/tutorial-how-to-collaborate/category-json.png)

6. **Copiez et collez le bloc suivant** en indiquant **le nom et la position** que le groupe prendra dans la barre latérale.
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
8. **La catégorie est prête !** Il apparaîtra dans la barre latérale une fois que vous aurez ajouté un onglet.


### Comment créer un nouvel onglet ?

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
5. **Ajoutez du contenu** en respectant les règles **[Markdown Features](https://docusaurus.io/docs/next/markdown-features)**.

![docs](/img/tutorial-how-to-collaborate/create-content.png)


6. En bas de l'écran, **donnez un titre/description à la modification** et cliquez sur le bouton `Commit new file`.
7. Votre site est prêt **[ici](https://e-pshad.github.io/pad-doc/)** !

:::info INFO
Veuillez noter que le déploiement peut prendre quelque minutes.
:::
