#!/usr/bin/env bash

tag="v2"

git tag -fa "$tag" -m "Update $tag tag"
git push origin "$tag" --force
