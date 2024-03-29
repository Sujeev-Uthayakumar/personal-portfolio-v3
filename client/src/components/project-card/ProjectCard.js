import React from "react";
import "./ProjectCard.css";

import {
  Card,
  Text,
  Group,
  Center,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    height: rem(280),
    marginTop: rem(20),
    marginBottom: rem(20),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [`&:hover .${getStylesRef("image")}`]: {
      transform: "scale(1.03)",
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef("image"),
    backgroundSize: "cover",
    transition: "transform 500ms ease",
  },

  overlay: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
  },

  content: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[2],
  },
}));

export function ProjectCard({ image, title, stack, stars, commits, link }) {
  const { classes } = useStyles();

  return (
    <div className="col-sm-6">
      <Card
        p="lg"
        shadow="lg"
        className={classes.card + " css-selector"}
        radius="md"
        component="a"
        href={link}
        target="_blank"
      >
        <div
          className={classes.image}
          style={{ backgroundColor: `url(${image})` }}
        />
        <div className={classes.overlay} />

        <div className={classes.content}>
          <div>
            <Text size="lg" className={classes.title} weight={500}>
              {title}
            </Text>

            <Group position="apart" spacing="xs">
              <Text size="sm" className={classes.author}>
                {stack}
              </Text>

              <Group spacing="lg">
                <Center>
                  <i class="fa-regular fa-star"></i>{" "}
                  <Text size="sm" className={classes.bodyText}>
                    {stars}
                  </Text>
                </Center>
                <Center>
                  <i class="fa-solid fa-code-commit"></i>
                  <Text size="sm" className={classes.bodyText}>
                    {commits}
                  </Text>
                </Center>
              </Group>
            </Group>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProjectCard;
