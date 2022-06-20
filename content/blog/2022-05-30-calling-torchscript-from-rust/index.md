---
title: Calling TorchScript from Rust
date: "2022-08-30T14:27:00Z"
draft: true
---


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
