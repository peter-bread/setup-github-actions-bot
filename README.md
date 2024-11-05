# setup-github-actions-bot

A GitHub Action to configure git `user.name` and `user.email` to use `github-actions[bot]`.

This action does the following:

- set git `user.name` to `github-actions[bot]`
- set git `user.email` to `41898282+github-actions[bot]@users.noreply.github.com`

This (for now at least) is a very simple workflow. It is mainly useful so you
don't need to remember the github actions bot credentials.

## Usage

```yaml
- name: checkout repository
  uses: actions/checkout@v4

- name: configure github actions bot
  uses: peter-bread/setup-github-actions-bot@v2
```
