// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: calc.proto

package proto

import (
	fmt "fmt"
	math "math"
	proto "github.com/golang/protobuf/proto"
	_ "github.com/mwitkow/go-proto-validators"
	github_com_mwitkow_go_proto_validators "github.com/mwitkow/go-proto-validators"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

func (this *CalcRequest) Validate() error {
	if !(this.Num1 > 0) {
		return github_com_mwitkow_go_proto_validators.FieldError("Num1", fmt.Errorf(`value '%v' must be greater than '0'`, this.Num1))
	}
	if !(this.Num1 < 100) {
		return github_com_mwitkow_go_proto_validators.FieldError("Num1", fmt.Errorf(`value '%v' must be less than '100'`, this.Num1))
	}
	if !(this.Num2 > 0) {
		return github_com_mwitkow_go_proto_validators.FieldError("Num2", fmt.Errorf(`value '%v' must be greater than '0'`, this.Num2))
	}
	if !(this.Num2 < 100) {
		return github_com_mwitkow_go_proto_validators.FieldError("Num2", fmt.Errorf(`value '%v' must be less than '100'`, this.Num2))
	}
	return nil
}
func (this *CalcResponse) Validate() error {
	if !(this.Result > 0) {
		return github_com_mwitkow_go_proto_validators.FieldError("Result", fmt.Errorf(`value '%v' must be greater than '0'`, this.Result))
	}
	if !(this.Result < 10000) {
		return github_com_mwitkow_go_proto_validators.FieldError("Result", fmt.Errorf(`value '%v' must be less than '10000'`, this.Result))
	}
	return nil
}
