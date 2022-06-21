---
title: Calling TorchScript from Rust
date: "2022-05-30T14:27:00Z"
draft: true
---

Python is the defacto standard for machine learning, however, it isn't always the ideal platform for production workloads.
It can be helpful to do your model development in Python, with its rich ecosystem, and then port that model over to run inference.
This first post will outline converting a PyTorch model, but future posts will cover other frameworks.

Moving from Python for development to a compiled language is such a common workflow that many frameworks provide bindings.
PyTorch has [C++ bindings available](https://pytorch.org/cppdocs/installing.html).
That might not sound particularly helpful for this blog post, but there is a fantastic Rust library that builds on top of those bindings called [tch-rs](https://github.com/LaurentMazare/tch-rs)

This first post will cover porting a PyTorch model to Rust for inference.

```python
import torch
from torch.jit import trace
from torchvision.models.efficientnet import efficientnet_b0

model = efficientnet_b0(pretrained=True)
model = model.eval()

scripted_model = trace(model, torch.rand(1, 3, 224, 244))
scripted_model.save("model.pt")
```

```bash
$ cargo new torchscripters
     Created binary (application) `torchscripters` package
```

```toml
[dependencies]
tch = "0.7.2"
```

```rust

```

```toml
[dependencies]
reqwest = {version = "0.11.10", features = ["blocking"]}
tch = "0.7.2"
```
