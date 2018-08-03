# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "global-site-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["John Muchovej", "SIGAI@UCF"]
  spec.email         = ["ucfsigai@googlegroups.com"]

  spec.summary       = "SIGAI@UCF's site theme, so the site can be dispersed across multiple repositories with a unified identity."
  spec.homepage      = "https://ucfsigai.github.io/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8.3"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
