terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  backend "s3" {
    bucket         = "terraform-state-aws-icons"
    key            = "terraform.tfstate"
    region         = "eu-west-2"
    dynamodb_table = "terraform-state-lock-aws-icons"
    encrypt        = true
  }


}

module "static-website" {
  source  = "matthew-boston/static-website/aws"
  version = "1.1.3"
  # insert the 3 required variables here
  static_website_bucket_name = "aws-icons.dev"
  tag_name                   = "AWS Icons Website"
  domain_name                = "aws-icons.dev"
  # Optional
  domain_prefix              = "www"
  restriction_type           = "blacklist"
  restriction_locations      = ["CN", "RU"]
}